
import { useState } from 'react';
import { Calendar, Clock, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type ServiceRequestFormProps = {
  categoryId?: string; 
  categoryName?: string;
};

const ServiceRequestForm = ({ categoryId, categoryName }: ServiceRequestFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zipCode: '',
    date: '',
    time: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.address || !formData.city || !formData.zipCode)) {
      toast.error("Veuillez remplir tous les champs d'adresse");
      return;
    }
    if (step === 2 && (!formData.date || !formData.time)) {
      toast.error("Veuillez sélectionner une date et une heure");
      return;
    }
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description) {
      toast.error("Veuillez décrire votre besoin");
      return;
    }
    
    // Here you would normally submit the form data to your backend
    console.log("Form submitted:", { categoryId, ...formData });
    
    toast.success("Votre demande a été envoyée avec succès !");
    // Reset form or redirect
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-artisan-primary to-blue-700 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">
          Demande de service {categoryName && `- ${categoryName}`}
        </h3>
        <p className="text-blue-100">
          Complétez le formulaire ci-dessous pour soumettre votre demande de service
        </p>
      </div>

      <div className="p-6">
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step === i 
                  ? 'bg-artisan-primary text-white' 
                  : step > i 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {step > i ? '✓' : i}
              </div>
              <span className="text-sm mt-2 text-gray-600">
                {i === 1 ? 'Adresse' : i === 2 ? 'Date' : 'Description'}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-artisan-primary mr-2" />
                <h4 className="text-lg font-medium">Où souhaitez-vous l'intervention ?</h4>
              </div>
              
              <div>
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 rue des Artisans"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Paris"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">Code Postal</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    placeholder="75001"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-artisan-primary mr-2" />
                <h4 className="text-lg font-medium">Quand souhaitez-vous l'intervention ?</h4>
              </div>
              
              <div>
                <Label htmlFor="date">Date souhaitée</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="time">Heure approximative</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              
              <p className="text-sm text-gray-500 mt-2">
                Nous ferons notre possible pour respecter vos préférences de date et d'heure
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 text-artisan-primary mr-2" />
                <h4 className="text-lg font-medium">Décrivez votre besoin</h4>
              </div>
              
              <div>
                <Label htmlFor="description">Description détaillée</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Décrivez votre problème ou besoin en détail..."
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 min-h-[150px]"
                />
              </div>
              
              <p className="text-sm text-gray-500">
                Plus votre description est précise, plus il sera facile pour nos artisans de vous aider efficacement
              </p>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={handleBack}>
                Retour
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <Button type="button" onClick={handleNext}>
                Suivant
              </Button>
            ) : (
              <Button type="submit" className="bg-artisan-primary hover:bg-blue-700">
                Envoyer ma demande
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
