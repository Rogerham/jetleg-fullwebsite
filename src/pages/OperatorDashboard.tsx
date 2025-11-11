import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  TrendingUp,
  DollarSign,
  CheckCircle,
  Plane,
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  BookOpen,
  Edit,
  Eye,
  FileText,
  Clock,
  Users,
  Calendar,
  ArrowLeft,
  Download,
  Search,
  Filter,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const OperatorDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - KPIs
  const kpis = {
    totalRevenue: 2450000,
    revenueGrowth: 23,
    netProfit: 845000,
    profitMargin: 34.5,
    soldFlights: 47,
    totalFlights: 62,
    soldPercentage: 76,
    avgTicketPrice: 4280,
    priceIncrease: 12,
  };

  // Mock data - Revenue chart (last 6 months)
  const revenueData = [
    { month: t("operatorDashboard.months.jan"), revenue: 180000 },
    { month: t("operatorDashboard.months.feb"), revenue: 210000 },
    { month: t("operatorDashboard.months.mar"), revenue: 195000 },
    { month: t("operatorDashboard.months.apr"), revenue: 240000 },
    { month: t("operatorDashboard.months.may"), revenue: 280000 },
    { month: t("operatorDashboard.months.jun"), revenue: 320000 },
  ];

  // Mock data - Top routes
  const topRoutes = [
    { route: "Amsterdam → Ibiza", flights: 12, revenue: 89400 },
    { route: "Paris → Nice", flights: 9, revenue: 67500 },
    { route: "London → Geneva", flights: 8, revenue: 95200 },
    { route: "Brussels → Rome", flights: 7, revenue: 58800 },
  ];

  // Mock data - Recent activity
  const recentActivity = [
    {
      text: t("operatorDashboard.activity.newBooking", { route: "AMS → NCE", price: "€4,200" }),
      time: t("operatorDashboard.activity.hoursAgo", { count: 2 }),
    },
    {
      text: t("operatorDashboard.activity.flightCancelled", { route: "LHR → CDG" }),
      time: t("operatorDashboard.activity.hoursAgo", { count: 5 }),
    },
    {
      text: t("operatorDashboard.activity.paymentProcessed", { amount: "€45,000" }),
      time: t("operatorDashboard.activity.daysAgo", { count: 1 }),
    },
    {
      text: t("operatorDashboard.activity.newLeads", { count: 4 }),
      time: t("operatorDashboard.activity.daysAgo", { count: 2 }),
    },
  ];

  // Mock data - Sold flights
  const soldFlights = [
    {
      id: "JL-OP-2025-0045",
      route: "Amsterdam → Ibiza",
      date: "15 Nov 2025 14:30",
      aircraft: "Citation CJ3+",
      passengers: "6/8",
      pricePerSeat: 3200,
      total: 19200,
      status: "confirmed",
    },
    {
      id: "JL-OP-2025-0046",
      route: "Paris → Nice",
      date: "18 Nov 2025 10:15",
      aircraft: "Phenom 300",
      passengers: "4/6",
      pricePerSeat: 2800,
      total: 11200,
      status: "completed",
    },
    {
      id: "JL-OP-2025-0047",
      route: "Brussels → Rome",
      date: "22 Nov 2025 16:45",
      aircraft: "Challenger 350",
      passengers: "8/10",
      pricePerSeat: 4500,
      total: 36000,
      status: "confirmed",
    },
    {
      id: "JL-OP-2025-0048",
      route: "London → Geneva",
      date: "25 Nov 2025 09:00",
      aircraft: "Gulfstream G200",
      passengers: "7/8",
      pricePerSeat: 5400,
      total: 37800,
      status: "in-progress",
    },
    {
      id: "JL-OP-2025-0049",
      route: "Amsterdam → London",
      date: "28 Nov 2025 11:30",
      aircraft: "Citation XLS",
      passengers: "5/8",
      pricePerSeat: 2100,
      total: 10500,
      status: "confirmed",
    },
    {
      id: "JL-OP-2025-0050",
      route: "Paris → Barcelona",
      date: "2 Dec 2025 15:00",
      aircraft: "Phenom 100",
      passengers: "3/4",
      pricePerSeat: 2600,
      total: 7800,
      status: "confirmed",
    },
    {
      id: "JL-OP-2025-0051",
      route: "London → Milan",
      date: "5 Dec 2025 12:30",
      aircraft: "Learjet 75",
      passengers: "6/8",
      pricePerSeat: 3800,
      total: 22800,
      status: "confirmed",
    },
  ];

  // Mock data - Active flights
  const activeFlights = [
    {
      id: "JL-OP-2025-0052",
      route: "Amsterdam → Madrid",
      date: "5 Dec 2025 15:00",
      aircraft: "Citation M2",
      seats: 6,
      price: 2900,
      views: 45,
      daysOnline: 3,
      status: "active",
    },
    {
      id: "JL-OP-2025-0053",
      route: "Paris → Barcelona",
      date: "8 Dec 2025 12:30",
      aircraft: "Phenom 100",
      seats: 4,
      price: 2400,
      views: 89,
      daysOnline: 7,
      status: "almost-full",
    },
    {
      id: "JL-OP-2025-0054",
      route: "London → Milan",
      date: "10 Dec 2025 14:15",
      aircraft: "Learjet 75",
      seats: 8,
      price: 3800,
      views: 12,
      daysOnline: 1,
      status: "new",
    },
    {
      id: "JL-OP-2025-0055",
      route: "Brussels → Geneva",
      date: "12 Dec 2025 10:00",
      aircraft: "Challenger 300",
      seats: 10,
      price: 4200,
      views: 67,
      daysOnline: 5,
      status: "active",
    },
    {
      id: "JL-OP-2025-0056",
      route: "Amsterdam → Nice",
      date: "15 Dec 2025 16:30",
      aircraft: "Citation CJ2",
      seats: 6,
      price: 3100,
      views: 34,
      daysOnline: 2,
      status: "active",
    },
  ];

  // Mock data - Unsold flights
  const unsoldFlights = [
    {
      id: "JL-OP-2025-0030",
      route: "Brussels → Amsterdam",
      date: "2 Nov 2025",
      aircraft: "Citation CJ2",
      published: "1 Nov 2025",
      views: 23,
      reason: "no-interest",
      lostRevenue: 12800,
    },
    {
      id: "JL-OP-2025-0031",
      route: "Paris → London",
      date: "5 Nov 2025",
      aircraft: "Phenom 300",
      published: "3 Nov 2025",
      views: 8,
      reason: "late-listing",
      lostRevenue: 9600,
    },
    {
      id: "JL-OP-2025-0032",
      route: "Amsterdam → Geneva",
      date: "8 Nov 2025",
      aircraft: "Challenger 300",
      published: "7 Nov 2025",
      views: 67,
      reason: "price-too-high",
      lostRevenue: 28000,
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: "default",
      completed: "secondary",
      "in-progress": "outline",
      active: "default",
      "almost-full": "secondary",
      new: "outline",
    };
    return (
      <Badge variant={variants[status as keyof typeof variants] as any}>
        {t(`operatorDashboard.status.${status}`)}
      </Badge>
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(
      amount,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-6">
          <Link to="/for-operators" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4" />
            {t("operatorDashboard.backToOperators")}
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {t("operatorDashboard.welcome", { name: "Sky Elite Aviation" })}
              </h1>
              <p className="text-white/90">{t("operatorDashboard.subtitle")}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary">
                <Plane className="h-4 w-4 mr-2" />
                {t("operatorDashboard.addFlight")}
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <HelpCircle className="h-4 w-4 mr-2" />
                {t("operatorDashboard.helpButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="container mx-auto px-6 -mt-6 mb-8">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.totalRevenue")}</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(kpis.totalRevenue)}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">+{kpis.revenueGrowth}%</span> {t("operatorDashboard.kpis.vsLastYear")}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.netProfit")}</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(kpis.netProfit)}</div>
                    <p className="text-xs text-muted-foreground">
                      {kpis.profitMargin}% {t("operatorDashboard.kpis.margin")}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.soldFlights")}</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{kpis.soldFlights}</div>
                    <p className="text-xs text-muted-foreground">
                      {t("operatorDashboard.kpis.outOf", { total: kpis.totalFlights })} ({kpis.soldPercentage}%{" "}
                      {t("operatorDashboard.kpis.sold")})
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.avgTicketPrice")}</CardTitle>
                    <Plane className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(kpis.avgTicketPrice)}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">+{kpis.priceIncrease}%</span> {t("operatorDashboard.kpis.vsLastMonth")}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.totalRevenue")}</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(kpis.totalRevenue)}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+{kpis.revenueGrowth}%</span> {t("operatorDashboard.kpis.vsLastYear")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.netProfit")}</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(kpis.netProfit)}</div>
              <p className="text-xs text-muted-foreground">
                {kpis.profitMargin}% {t("operatorDashboard.kpis.margin")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.soldFlights")}</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.soldFlights}</div>
              <p className="text-xs text-muted-foreground">
                {t("operatorDashboard.kpis.outOf", { total: kpis.totalFlights })} ({kpis.soldPercentage}%{" "}
                {t("operatorDashboard.kpis.sold")})
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("operatorDashboard.kpis.avgTicketPrice")}</CardTitle>
              <Plane className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(kpis.avgTicketPrice)}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+{kpis.priceIncrease}%</span> {t("operatorDashboard.kpis.vsLastMonth")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content - Tabs */}
      <div className="container mx-auto px-6 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">{t("operatorDashboard.tabs.overview")}</TabsTrigger>
            <TabsTrigger value="sold">{t("operatorDashboard.tabs.soldFlights")}</TabsTrigger>
            <TabsTrigger value="active">{t("operatorDashboard.tabs.activeFlights")}</TabsTrigger>
            <TabsTrigger value="unsold">{t("operatorDashboard.tabs.unsoldFlights")}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>{t("operatorDashboard.overview.revenueChart")}</CardTitle>
                  <CardDescription>{t("operatorDashboard.overview.last6Months")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {revenueData.map((item) => (
                      <div key={item.month} className="flex items-center gap-4">
                        <div className="w-16 text-sm text-muted-foreground">{item.month}</div>
                        <div className="flex-1 bg-muted rounded-full h-8 relative overflow-hidden">
                          <div
                            className="bg-primary h-full flex items-center justify-end px-3 text-white text-sm font-medium"
                            style={{ width: `${(item.revenue / 320000) * 100}%` }}
                          >
                            {formatCurrency(item.revenue)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("operatorDashboard.overview.recentActivity")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                          <p className="text-sm text-foreground">{activity.text}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Routes */}
            <Card>
              <CardHeader>
                <CardTitle>{t("operatorDashboard.overview.topRoutes")}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("operatorDashboard.table.route")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.flights")}</TableHead>
                      <TableHead className="text-right">{t("operatorDashboard.table.revenue")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topRoutes.map((route) => (
                      <TableRow key={route.route}>
                        <TableCell className="font-medium">{route.route}</TableCell>
                        <TableCell>{route.flights}</TableCell>
                        <TableCell className="text-right font-medium">{formatCurrency(route.revenue)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sold Flights Tab */}
          <TabsContent value="sold" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <CardTitle>{t("operatorDashboard.soldFlights.title")}</CardTitle>
                    <CardDescription>{t("operatorDashboard.soldFlights.description")}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder={t("operatorDashboard.search")}
                        className="pl-9 w-full md:w-[250px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("operatorDashboard.table.flightId")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.route")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.dateTime")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.aircraft")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.passengers")}</TableHead>
                      <TableHead className="text-right">{t("operatorDashboard.table.totalRevenue")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.status")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {soldFlights.map((flight) => (
                      <TableRow key={flight.id}>
                        <TableCell className="font-mono text-sm">{flight.id}</TableCell>
                        <TableCell className="font-medium">{flight.route}</TableCell>
                        <TableCell className="text-sm">{flight.date}</TableCell>
                        <TableCell>{flight.aircraft}</TableCell>
                        <TableCell>{flight.passengers}</TableCell>
                        <TableCell className="text-right font-medium">{formatCurrency(flight.total)}</TableCell>
                        <TableCell>{getStatusBadge(flight.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Active Flights Tab */}
          <TabsContent value="active" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <CardTitle>{t("operatorDashboard.activeFlights.title")}</CardTitle>
                    <CardDescription>{t("operatorDashboard.activeFlights.description")}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button>
                      <Plane className="h-4 w-4 mr-2" />
                      {t("operatorDashboard.addFlight")}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("operatorDashboard.table.flightId")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.route")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.date")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.aircraft")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.availableSeats")}</TableHead>
                      <TableHead className="text-right">{t("operatorDashboard.table.pricePerSeat")}</TableHead>
                      <TableHead className="text-center">{t("operatorDashboard.table.views")}</TableHead>
                      <TableHead className="text-center">{t("operatorDashboard.table.daysOnline")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.status")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeFlights.map((flight) => (
                      <TableRow key={flight.id}>
                        <TableCell className="font-mono text-sm">{flight.id}</TableCell>
                        <TableCell className="font-medium">{flight.route}</TableCell>
                        <TableCell className="text-sm">{flight.date}</TableCell>
                        <TableCell>{flight.aircraft}</TableCell>
                        <TableCell>{flight.seats}</TableCell>
                        <TableCell className="text-right font-medium">{formatCurrency(flight.price)}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Eye className="h-3 w-3 text-muted-foreground" />
                            {flight.views}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">{flight.daysOnline}</TableCell>
                        <TableCell>{getStatusBadge(flight.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <DollarSign className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Unsold Flights Tab */}
          <TabsContent value="unsold" className="space-y-6">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>{t("operatorDashboard.unsoldFlights.title")}</CardTitle>
                  <CardDescription>{t("operatorDashboard.unsoldFlights.description")}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Analysis Summary */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">{t("operatorDashboard.unsoldFlights.analysis")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{t("operatorDashboard.unsoldFlights.totalLost")}</p>
                      <p className="text-2xl font-bold text-red-600">{formatCurrency(145000)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("operatorDashboard.unsoldFlights.commonReason")}
                      </p>
                      <p className="text-lg font-semibold">{t("operatorDashboard.reasons.price-too-high")} (45%)</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("operatorDashboard.unsoldFlights.recommendation")}
                      </p>
                      <p className="text-sm">{t("operatorDashboard.unsoldFlights.recommendationText")}</p>
                    </div>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("operatorDashboard.table.flightId")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.route")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.date")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.aircraft")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.published")}</TableHead>
                      <TableHead className="text-center">{t("operatorDashboard.table.views")}</TableHead>
                      <TableHead>{t("operatorDashboard.table.reason")}</TableHead>
                      <TableHead className="text-right">{t("operatorDashboard.table.lostRevenue")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {unsoldFlights.map((flight) => (
                      <TableRow key={flight.id}>
                        <TableCell className="font-mono text-sm">{flight.id}</TableCell>
                        <TableCell className="font-medium">{flight.route}</TableCell>
                        <TableCell className="text-sm">{flight.date}</TableCell>
                        <TableCell>{flight.aircraft}</TableCell>
                        <TableCell className="text-sm">{flight.published}</TableCell>
                        <TableCell className="text-center">{flight.views}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{t(`operatorDashboard.reasons.${flight.reason}`)}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium text-red-600">
                          {formatCurrency(flight.lostRevenue)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{t("operatorDashboard.help.title")}</CardTitle>
            <CardDescription>{t("operatorDashboard.help.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{t("operatorDashboard.help.guide")}</h3>
                <p className="text-sm text-muted-foreground">{t("operatorDashboard.help.guideDesc")}</p>
              </div>
              <div className="space-y-2">
                <MessageSquare className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{t("operatorDashboard.help.liveChat")}</h3>
                <p className="text-sm text-muted-foreground">{t("operatorDashboard.help.liveChatDesc")}</p>
              </div>
              <div className="space-y-2">
                <Mail className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{t("operatorDashboard.help.email")}</h3>
                <p className="text-sm text-muted-foreground">support@jetleg.com</p>
              </div>
              <div className="space-y-2">
                <Phone className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{t("operatorDashboard.help.phone")}</h3>
                <p className="text-sm text-muted-foreground">+31 20 123 4567</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperatorDashboard;
