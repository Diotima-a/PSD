
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, Settings, Bell, LogOut, FileText, Calendar, User, Building, Users, Clock, MessageSquare, ChevronRight } from 'lucide-react';

// This is a placeholder dashboard that would be customized based on user role
// For a complete app, you'd have separate dashboards or conditional rendering for each role
const Dashboard = () => {
  const [userRole, setUserRole] = useState<'client' | 'provider' | 'agent' | 'admin'>('client');
  
  // Placeholder data for demo purposes
  const pendingRequests = [
    { id: '1', service: 'Plomberie', date: '15/05/2025', status: 'pending' },
    { id: '2', service: 'Électricité', date: '20/05/2025', status: 'assigned' },
  ];
  
  const completedRequests = [
    { id: '3', service: 'Menuiserie', date: '01/04/2025', status: 'completed' },
    { id: '4', service: 'Peinture', date: '15/03/2025', status: 'completed' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900">Tableau de bord</h2>
          </div>
          
          <nav className="mt-4">
            <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Menu principal
            </div>
            
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 bg-blue-50 border-l-4 border-artisan-primary">
              <Home className="mr-3 h-5 w-5 text-artisan-primary" />
              Vue d'ensemble
            </a>
            
            {userRole === 'client' && (
              <>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <FileText className="mr-3 h-5 w-5 text-gray-500" />
                  Mes demandes
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <Calendar className="mr-3 h-5 w-5 text-gray-500" />
                  Rendez-vous
                </a>
              </>
            )}
            
            {userRole === 'provider' && (
              <>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <FileText className="mr-3 h-5 w-5 text-gray-500" />
                  Demandes reçues
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <Building className="mr-3 h-5 w-5 text-gray-500" />
                  Mes agences
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <Users className="mr-3 h-5 w-5 text-gray-500" />
                  Mes agents
                </a>
              </>
            )}
            
            {userRole === 'agent' && (
              <>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <FileText className="mr-3 h-5 w-5 text-gray-500" />
                  Mes missions
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <Clock className="mr-3 h-5 w-5 text-gray-500" />
                  Planning
                </a>
              </>
            )}
            
            {userRole === 'admin' && (
              <>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <Building className="mr-3 h-5 w-5 text-gray-500" />
                  Prestataires
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <User className="mr-3 h-5 w-5 text-gray-500" />
                  Clients
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  <FileText className="mr-3 h-5 w-5 text-gray-500" />
                  Demandes
                </a>
              </>
            )}
            
            <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Paramètres
            </div>
            
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
              <User className="mr-3 h-5 w-5 text-gray-500" />
              Mon profil
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
              <Settings className="mr-3 h-5 w-5 text-gray-500" />
              Paramètres
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
              <Bell className="mr-3 h-5 w-5 text-gray-500" />
              Notifications
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
              <LogOut className="mr-3 h-5 w-5 text-gray-500" />
              Déconnexion
            </a>
          </nav>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {/* Role selector (for demo purposes) */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h2 className="text-sm font-medium text-gray-500 mb-2">Mode démo - Changer de rôle</h2>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={userRole === 'client' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setUserRole('client')}
              >
                Client
              </Button>
              <Button 
                variant={userRole === 'provider' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setUserRole('provider')}
              >
                Prestataire
              </Button>
              <Button 
                variant={userRole === 'agent' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setUserRole('agent')}
              >
                Agent
              </Button>
              <Button 
                variant={userRole === 'admin' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setUserRole('admin')}
              >
                Admin
              </Button>
            </div>
          </div>
          
          {/* Page header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bonjour, Utilisateur</h1>
              <p className="text-gray-600">
                {userRole === 'client'
                  ? 'Bienvenue dans votre espace client'
                  : userRole === 'provider'
                  ? 'Bienvenue dans votre espace prestataire'
                  : userRole === 'agent'
                  ? 'Bienvenue dans votre espace agent'
                  : 'Bienvenue dans votre espace administrateur'}
              </p>
            </div>
            
            {userRole === 'client' && (
              <Link to="/services">
                <Button className="mt-4 md:mt-0 bg-artisan-primary hover:bg-blue-700">
                  Nouvelle demande
                </Button>
              </Link>
            )}
            
            {userRole === 'provider' && (
              <Link to="/dashboard/agents/new">
                <Button className="mt-4 md:mt-0 bg-artisan-primary hover:bg-blue-700">
                  Ajouter un agent
                </Button>
              </Link>
            )}
            
            {userRole === 'admin' && (
              <Link to="/dashboard/providers/new">
                <Button className="mt-4 md:mt-0 bg-artisan-primary hover:bg-blue-700">
                  Ajouter un prestataire
                </Button>
              </Link>
            )}
          </div>
          
          {/* Dashboard content - Client view */}
          {userRole === 'client' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Tabs defaultValue="pending">
                  <TabsList className="mb-4">
                    <TabsTrigger value="pending">En cours</TabsTrigger>
                    <TabsTrigger value="completed">Terminées</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="pending">
                    <Card>
                      <CardHeader>
                        <CardTitle>Demandes en cours</CardTitle>
                        <CardDescription>
                          Vos demandes de service en attente ou en cours de traitement
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {pendingRequests.length > 0 ? (
                          <div className="space-y-4">
                            {pendingRequests.map((request) => (
                              <div 
                                key={request.id} 
                                className="flex items-center justify-between p-4 border rounded-lg hover:border-artisan-primary transition-colors"
                              >
                                <div>
                                  <div className="font-semibold text-gray-900">{request.service}</div>
                                  <div className="text-sm text-gray-500">Prévu le {request.date}</div>
                                </div>
                                <div className="flex items-center">
                                  <Badge variant={request.status === 'pending' ? 'outline' : 'default'}>
                                    {request.status === 'pending' ? 'En attente' : 'Assigné'}
                                  </Badge>
                                  <ChevronRight className="ml-2 h-5 w-5 text-gray-400" />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-6">
                            <p className="text-gray-500">Aucune demande en cours</p>
                            <Link to="/services" className="text-artisan-primary hover:underline mt-2 inline-block">
                              Faire une demande
                            </Link>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="completed">
                    <Card>
                      <CardHeader>
                        <CardTitle>Demandes terminées</CardTitle>
                        <CardDescription>
                          Historique de vos interventions terminées
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {completedRequests.length > 0 ? (
                          <div className="space-y-4">
                            {completedRequests.map((request) => (
                              <div 
                                key={request.id} 
                                className="flex items-center justify-between p-4 border rounded-lg"
                              >
                                <div>
                                  <div className="font-semibold text-gray-900">{request.service}</div>
                                  <div className="text-sm text-gray-500">Réalisé le {request.date}</div>
                                </div>
                                <div className="flex items-center">
                                  <Badge variant="success" className="bg-green-100 text-green-800 hover:bg-green-200">
                                    Terminé
                                  </Badge>
                                  <ChevronRight className="ml-2 h-5 w-5 text-gray-400" />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-6">
                            <p className="text-gray-500">Aucune demande terminée</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Mon profil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 font-medium text-lg">Client Nom</h3>
                      <p className="text-gray-500">client@example.com</p>
                      
                      <div className="w-full mt-6 space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <User className="mr-2 h-4 w-4" />
                          Modifier mon profil
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Messages
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Bell className="mr-2 h-4 w-4" />
                          Notifications
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Besoin d'aide ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Notre équipe est disponible pour répondre à toutes vos questions.
                    </p>
                    <Button variant="outline" className="w-full">
                      Contacter le support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {/* Provider view would be implemented similarly */}
          {userRole === 'provider' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Demandes récentes</CardTitle>
                    <CardDescription>
                      Les dernières demandes de service reçues
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Placeholder content for provider view */}
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Réparation plomberie</h4>
                            <p className="text-sm text-gray-500">Paris 75001 - Pour le 15/05/2025</p>
                          </div>
                          <Badge>Nouvelle</Badge>
                        </div>
                        <p className="text-sm mt-2">Fuite sous l'évier de la cuisine...</p>
                        <div className="flex justify-end mt-4">
                          <Button size="sm" variant="outline" className="mr-2">Décliner</Button>
                          <Button size="sm">Accepter</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Installation électrique</h4>
                            <p className="text-sm text-gray-500">Lyon 69001 - Pour le 20/05/2025</p>
                          </div>
                          <Badge>Nouvelle</Badge>
                        </div>
                        <p className="text-sm mt-2">Installation de prises électriques...</p>
                        <div className="flex justify-end mt-4">
                          <Button size="sm" variant="outline" className="mr-2">Décliner</Button>
                          <Button size="sm">Accepter</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Mon entreprise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/22.jpg" />
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 font-medium text-lg">Entreprise XYZ</h3>
                      <Badge className="mt-2">Prestataire vérifié</Badge>
                      
                      <div className="w-full mt-6 space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Building className="mr-2 h-4 w-4" />
                          Gérer le profil
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Users className="mr-2 h-4 w-4" />
                          Mes agents (5)
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Statistiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Demandes ce mois</p>
                        <p className="text-2xl font-bold">24</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Satisfaction client</p>
                        <p className="text-2xl font-bold">4.8/5</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Interventions terminées</p>
                        <p className="text-2xl font-bold">127</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {/* Agent and Admin views would be implemented similarly */}
          {(userRole === 'agent' || userRole === 'admin') && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">Tableau de bord {userRole === 'agent' ? 'Agent' : 'Administrateur'}</h3>
              <p className="text-gray-500 mt-2">Cette vue serait personnalisée pour les {userRole === 'agent' ? 'agents' : 'administrateurs'}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
