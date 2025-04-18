
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { Calendar, Clock, CheckCircle, AlertCircle, MessageSquare, Users, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const barChartData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 27 },
    { name: 'May', value: 22 },
    { name: 'Jun', value: 30 },
  ];

  const pieChartData = [
    { name: 'Plomberie', value: 35 },
    { name: 'Électricité', value: 25 },
    { name: 'Rénovation', value: 20 },
    { name: 'Autres', value: 20 },
  ];

  const COLORS = ['#1E4D8C', '#F97316', '#22C55E', '#64748B'];

  const recentRequests = [
    {
      id: 'REQ001',
      service: 'Plomberie',
      client: 'Sophie Martin',
      status: 'completed',
      date: '2025-03-15',
    },
    {
      id: 'REQ002',
      service: 'Électricité',
      client: 'Jean Dupont',
      status: 'in-progress',
      date: '2025-04-10',
    },
    {
      id: 'REQ003',
      service: 'Rénovation',
      client: 'Marie Lefebvre',
      status: 'pending',
      date: '2025-04-18',
    },
  ];

  const notifications = [
    {
      id: 1,
      type: 'info',
      message: 'Nouvelle demande de service reçue',
      time: 'Il y a 10 minutes',
    },
    {
      id: 2,
      type: 'alert',
      message: 'Le paiement pour la requête REQ002 est en attente',
      time: 'Il y a 2 heures',
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-servigo-success">Terminé</Badge>;
      case 'in-progress':
        return <Badge className="bg-servigo-secondary">En cours</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-gray-500">En attente</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-servigo-primary text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">ServiGo</h2>
          <p className="text-sm text-blue-200">Tableau de bord</p>
        </div>
        <div className="px-4 py-2">
          <div className="flex items-center space-x-2 mb-6">
            <Avatar>
              <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Jean Dupont</p>
              <p className="text-xs text-blue-200">Prestataire</p>
            </div>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="space-y-1">
            {[
              { icon: <BarChart className="w-5 h-5" />, label: 'Vue d\'ensemble', value: 'overview' },
              { icon: <Clock className="w-5 h-5" />, label: 'Demandes', value: 'requests' },
              { icon: <CheckCircle className="w-5 h-5" />, label: 'Services', value: 'services' },
              { icon: <MessageSquare className="w-5 h-5" />, label: 'Messages', value: 'messages' },
              { icon: <Users className="w-5 h-5" />, label: 'Clients', value: 'clients' },
              { icon: <Settings className="w-5 h-5" />, label: 'Paramètres', value: 'settings' },
            ].map((item) => (
              <li key={item.value}>
                <button
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
                    activeTab === item.value
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(item.value)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-4 px-4 w-64">
          <Button variant="secondary" className="w-full flex items-center justify-center">
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-servigo-dark">Tableau de bord</h1>
          </div>
        </header>

        <main className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="requests">Demandes</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  { title: 'Total des demandes', value: '87', icon: <Clock className="h-8 w-8 text-servigo-primary" /> },
                  { title: 'Demandes en cours', value: '12', icon: <AlertCircle className="h-8 w-8 text-servigo-secondary" /> },
                  { title: 'Demandes terminées', value: '68', icon: <CheckCircle className="h-8 w-8 text-servigo-success" /> },
                ].map((stat, i) => (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                      {stat.icon}
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{stat.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Demandes par mois</CardTitle>
                    <CardDescription>Évolution mensuelle des demandes de services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#1E4D8C" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Répartition des services</CardTitle>
                    <CardDescription>Types de services les plus demandés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Demandes récentes</CardTitle>
                    <CardDescription>Les dernières demandes de services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentRequests.map((request) => (
                        <div key={request.id} className="flex items-center justify-between border-b pb-4">
                          <div>
                            <p className="font-medium">{request.service}</p>
                            <p className="text-sm text-gray-500">{request.client}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500">{request.date}</span>
                            {getStatusBadge(request.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Voir toutes les demandes</Button>
                  </CardFooter>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Mises à jour importantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <Alert key={notification.id} variant="default">
                          <AlertTitle>{notification.message}</AlertTitle>
                          <AlertDescription className="text-sm text-gray-500">{notification.time}</AlertDescription>
                        </Alert>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Voir toutes les notifications</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="requests">
              <Card>
                <CardHeader>
                  <CardTitle>Demandes de services</CardTitle>
                  <CardDescription>Gérez toutes vos demandes de service</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Le contenu détaillé des demandes sera affiché ici.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Gestion des services</CardTitle>
                  <CardDescription>Configurez les services que vous proposez</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>La gestion des services sera affichée ici.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
