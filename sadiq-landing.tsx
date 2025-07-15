"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Settings,
  ShoppingCart,
  Zap,
  ArrowLeft,
  Sparkles,
  Crown,
  Rocket,
  Menu,
  Target,
  Layers,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Star,
  Users,
  Award,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function SadiqLanding() {
  return (
    <div
      className="min-h-screen bg-white text-black overflow-x-hidden font-tajawal"
      dir="rtl"
    >
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-xl border border-[#0B8A3D]/20 rounded-2xl px-6 py-4 mx-auto max-w-7xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-[#0B8A3D] rounded-xl flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=27&width=40"
                    alt="شعار صديق"
                    width={40}
                    height={27}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#0B8A3D] rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-black">صديق</h1>
                <p className="text-xs text-[#0B8A3D] font-medium">
                  النظام المتكامل
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 rtl:gap-x-reverse">
              <a
                href="#platforms"
                className="text-black/80 hover:text-[#0B8A3D] transition-all duration-300 relative group font-medium"
              >
                المنصات
                <div className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0B8A3D] transition-all duration-300 group-hover:w-full rtl:right-auto rtl:left-0"></div>
              </a>
              <a
                href="#plans"
                className="text-black/80 hover:text-[#0B8A3D] transition-all duration-300 relative group font-medium"
              >
                الاشتراكات
                <div className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0B8A3D] transition-all duration-300 group-hover:w-full rtl:right-auto rtl:left-0"></div>
              </a>
              <Button className="bg-[#0B8A3D] hover:bg-[#0B8A3D]/90 text-white px-6 py-2 rounded-xl font-semibold">
                ابدأ الآن
              </Button>
            </nav>
            <Button className="md:hidden bg-[#0B8A3D] text-white p-2 rounded-xl">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#0B8A3D]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0B8A3D]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B8A3D]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
          {/* Floating Elements */}
          <div className="absolute top-32 right-32 w-4 h-4 bg-[#0B8A3D] rounded-full animate-bounce"></div>
          <div className="absolute top-64 left-64 w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-32 right-64 w-5 h-5 bg-[#0B8A3D] rounded-full animate-bounce delay-700"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Animated Badge */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-[#0B8A3D]/20 border border-[#0B8A3D]/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-[#0B8A3D] animate-spin" />
                <span className="text-[#0B8A3D] font-semibold">
                  النظام الرقمي الجديد
                </span>
                <Sparkles className="h-5 w-5 text-[#0B8A3D] animate-spin" />
              </div>
            </div>
            {/* Main Title with Animation */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-black via-[#0B8A3D] to-black bg-clip-text text-transparent animate-pulse">
                  صديق
                </span>
                <br />
                <span className="text-[#0B8A3D] text-5xl md:text-7xl">
                  مكتب العمل الافتراضي
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#0B8A3D] to-white mx-auto rounded-full"></div>
            </div>
            {/* Subtitle */}
            <div className="text-2xl md:text-4xl mb-16 text-black/80 font-light leading-relaxed max-w-5xl mx-auto">
              <span className="text-[#0B8A3D] font-bold">ثلاث منصات قوية</span>{" "}
              في نظام واحد متكامل
              <br />
              <span className="text-lg md:text-2xl text-black/60 font-normal">
                لخدمتك • تأهيلك • تسويق أدواتك
              </span>
            </div>
            {/* Hero Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16 rtl:flex-row-reverse">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0B8A3D] to-[#0B8A3D]/80 hover:from-[#0B8A3D]/90 hover:to-[#0B8A3D] text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-[#0B8A3D]/25 transition-all duration-500 transform hover:scale-110 group relative overflow-hidden"
                onClick={() =>
                  window.open(
                    "https://e-learning-tan-omega.vercel.app/",
                    "_blank"
                  )
                }
              >
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <BookOpen className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span>منصة التعليم</span>
                  <ArrowLeft className="h-5 w-5 group-hover:translate-x-2 transition-transform rtl:rotate-180" />
                </div>
              </Button>
              <Button
                size="lg"
                className="bg-black/10 border-2 border-black/20 text-black hover:bg-black hover:text-white px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-110 group"
                onClick={() => window.open("https://sadiq.app/", "_blank")}
              >
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>تطبيق الخدمات</span>
                </div>
              </Button>
              <Button
                size="lg"
                className="bg-black/10 border-2 border-black/20 text-black hover:bg-black hover:text-white px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-110 group"
                onClick={() =>
                  window.open(
                    "https://sadiq-front-e2zgr7ktn-hamzalutfis-projects.vercel.app/",
                    "_blank"
                  )
                }
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-6 w-6 group-hover:bounce transition-transform" />
                  <span>المتجر الرقمي</span>
                </div>
              </Button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#0B8A3D] mb-2">
                  +10K
                </div>
                <div className="text-black/60 text-sm font-normal">
                  مستخدم نشط
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#0B8A3D] mb-2">
                  +500
                </div>
                <div className="text-black/60 text-sm font-normal">
                  دورة تدريبية
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#0B8A3D] mb-2">
                  24/7
                </div>
                <div className="text-black/60 text-sm font-normal">
                  دعم متواصل
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-[#0B8A3D]" />
        </div>
      </section>

      {/* Platforms Section */}
      <section
        id="platforms"
        className="py-32 bg-gradient-to-b from-gray-50 to-white relative"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-[#0B8A3D]/20 border border-[#0B8A3D]/30 rounded-full px-6 py-3 mb-8">
              <Layers className="h-5 w-5 text-[#0B8A3D]" />
              <span className="text-[#0B8A3D] font-semibold">
                منصات متكاملة
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-black">
              ثلاث منصات
              <span className="block text-[#0B8A3D] text-4xl md:text-6xl">
                قوة واحدة
              </span>
            </h2>
          </div>
          {/* Platforms Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Platform 1 - E-Learning */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B8A3D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Card className="relative bg-gradient-to-br from-white to-gray-50 border border-[#0B8A3D]/20 shadow-xl rounded-3xl overflow-hidden group-hover:border-[#0B8A3D]/40 transition-all duration-500 transform group-hover:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B8A3D] to-transparent"></div>
                <CardHeader className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-[#0B8A3D] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-[#0B8A3D]/20 text-[#0B8A3D] border-[#0B8A3D]/30 font-semibold">
                      01
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black mb-4">
                    منصة صديق التعليمية
                  </CardTitle>
                  <div className="w-16 h-0.5 bg-[#0B8A3D] rounded-full"></div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-lg text-black/70 mb-8 leading-relaxed font-normal">
                    دورات تدريبية احترافية في المهارات التقنية والناعمة مع
                    شهادات معتمدة ومدربين خبراء من جميع أنحاء العالم العربي.
                  </CardDescription>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0B8A3D] rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        +200 دورة متخصصة
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0B8A3D] rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        شهادات معتمدة دولياً
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0B8A3D] rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        تعلم تفاعلي ومباشر
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-[#0B8A3D] hover:bg-[#0B8A3D]/90 text-white py-4 rounded-xl font-semibold group-hover:shadow-lg group-hover:shadow-[#0B8A3D]/25 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://e-learning-nine-tan.vercel.app/",
                        "_blank"
                      )
                    }
                  >
                    <span>استكشف المنصة</span>
                    <Rocket className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            {/* Platform 2 - Services */}
            <div className="group relative lg:mt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Card className="relative bg-gradient-to-br from-white to-gray-50 border border-white/20 shadow-xl rounded-3xl overflow-hidden group-hover:border-white/40 transition-all duration-500 transform group-hover:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></div>
                <CardHeader className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Settings className="h-8 w-8 text-black" />
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30 font-semibold">
                      02
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black mb-4">
                    تطبيق صديق للخدمات
                  </CardTitle>
                  <div className="w-16 h-0.5 bg-white rounded-full"></div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-lg text-black/70 mb-8 leading-relaxed font-normal">
                    سوق رقمي متطور لعرض وطلب الخدمات المهنية مع نظام حماية متقدم
                    وتقييمات موثوقة لضمان جودة الخدمات.
                  </CardDescription>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        حماية كاملة للمدفوعات
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        نظام تقييمات شفاف
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        تواصل مباشر آمن
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl font-semibold group-hover:shadow-lg group-hover:shadow-white/25 transition-all duration-300"
                    onClick={() => window.open("https://sadiq.app/", "_blank")}
                  >
                    <span>جرب التطبيق</span>
                    <Zap className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            {/* Platform 3 - Store */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B8A3D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Card className="relative bg-gradient-to-br from-white to-gray-50 border border-[#0B8A3D]/20 shadow-xl rounded-3xl overflow-hidden group-hover:border-[#0B8A3D]/40 transition-all duration-500 transform group-hover:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B8A3D] to-transparent"></div>
                <CardHeader className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-[#0B8A3D] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <ShoppingCart className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-[#0B8A3D]/20 text-[#0B8A3D] border-[#0B8A3D]/30 font-semibold">
                      03
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black mb-4">
                    متجر صديق الرقمي
                  </CardTitle>
                  <div className="w-16 h-0.5 bg-[#0B8A3D] rounded-full"></div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-lg text-black/70 mb-8 leading-relaxed font-normal">
                    متجر شامل للأدوات الاحترافية والمنتجات الرقمية بأسعار
                    تنافسية مع إمكانية بيع منتجاتك الخاصة.
                  </CardDescription>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0B8A3D] rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        أدوات Adobe و ChatGPT
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0B8A3D] rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        أسعار تنافسية
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0B8A3D] rounded-full"></div>
                      <span className="text-black/80 font-normal">
                        بيع منتجاتك الرقمية
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-[#0B8A3D] hover:bg-[#0B8A3D]/90 text-white py-4 rounded-xl font-semibold group-hover:shadow-lg group-hover:shadow-[#0B8A3D]/25 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://sadiq-front-osh1.vercel.app/store",
                        "_blank"
                      )
                    }
                  >
                    <span>تسوق الآن</span>
                    <Crown className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="plans"
        className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#0B8A3D]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B8A3D]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0B8A3D]/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0B8A3D]/20 to-[#0B8A3D]/10 border border-[#0B8A3D]/30 rounded-full px-8 py-4 mb-8 shadow-lg">
              <div className="w-8 h-8 bg-[#0B8A3D] rounded-full flex items-center justify-center">
                <Target className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#0B8A3D] font-bold text-lg">
                خطط استثنائية
              </span>
              <div className="w-2 h-2 bg-[#0B8A3D] rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-6 text-black leading-tight">
              اختر خطتك
              <span className="block bg-gradient-to-r from-[#0B8A3D] via-[#0B8A3D]/80 to-[#0B8A3D] bg-clip-text text-transparent text-5xl md:text-7xl">
                المثالية
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0B8A3D] to-[#0B8A3D]/50 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed font-normal">
              خطط مصممة بعناية لتناسب كل مستوى من الخبرة والطموح
              <br />
              <span className="text-[#0B8A3D] font-semibold">
                مع ضمان المرونة الكاملة في التغيير
              </span>
            </p>
          </div>
          {/* Pricing Cards */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Free Plan */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:border-gray-300 transition-all duration-500 transform group-hover:-translate-y-2">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 text-center border-b border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-4xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      البداية المجانية
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-5xl font-black text-black">
                        SYP 0
                      </span>
                      <div className="text-right">
                        <div className="text-sm text-black/60 font-medium">
                          مدى الحياة
                        </div>
                        <div className="text-xs text-black/40 font-normal">
                          بدون التزام
                        </div>
                      </div>
                    </div>
                    <p className="text-black/60 text-sm font-normal">
                      مثالي للاستكشاف والبداية
                    </p>
                  </div>
                  {/* Features */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {[
                        { text: "تصفح جميع الخدمات", icon: "👀" },
                        { text: "تقديم عروض محدودة", icon: "📝" },
                        { text: "ملف شخصي أساسي", icon: "👤" },
                        { text: "دعم المجتمع", icon: "💬" },
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-sm">{feature.icon}</span>
                          </div>
                          <span className="text-black/80 font-medium">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-black/60 text-sm font-normal">
                          العمولة
                        </span>
                        <span className="text-black font-bold">10%</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      ابدأ مجاناً الآن
                    </Button>
                  </div>
                </div>
              </div>
              {/* Lite Plan - Featured */}
              <div className="group relative lg:-mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B8A3D]/30 to-[#0B8A3D]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                {/* Popular Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#0B8A3D] to-[#0B8A3D]/80 text-white px-8 py-3 rounded-full font-bold text-sm shadow-2xl flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    الأكثر شعبية
                    <Sparkles className="h-4 w-4 animate-spin" />
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-[#0B8A3D] to-[#0B8A3D]/90 border-2 border-[#0B8A3D] rounded-3xl overflow-hidden shadow-2xl shadow-[#0B8A3D]/25 group-hover:shadow-3xl group-hover:shadow-[#0B8A3D]/40 transition-all duration-500 transform group-hover:-translate-y-4">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-white/10 to-transparent p-8 text-center border-b border-white/20 pt-12">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl backdrop-blur-sm">
                      <span className="text-5xl">⚡</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Sadiq Lite
                    </h3>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-6xl font-black text-white">
                        SYP 4.99
                      </span>
                      <div className="text-right">
                        <div className="text-sm text-white/80 font-medium">
                          شهرياً
                        </div>
                        <div className="text-xs text-white/60 line-through font-normal">
                          $9.99
                        </div>
                      </div>
                    </div>
                    <p className="text-white/90 font-medium">
                      للمحترفين الطموحين
                    </p>
                  </div>
                  {/* Features */}
                  <div className="p-8">
                    <ul className="space-y-5 mb-8">
                      {[
                        {
                          text: "ملف احترافي متقدم",
                          icon: "🎖️",
                          highlight: true,
                        },
                        {
                          text: "خصم 5% على كل المشتريات",
                          icon: "💰",
                          highlight: true,
                        },
                        {
                          text: "ظهور مميز في البحث",
                          icon: "🔝",
                          highlight: false,
                        },
                        {
                          text: "تقارير تفصيلية",
                          icon: "📊",
                          highlight: false,
                        },
                        { text: "دعم أولوية", icon: "🚀", highlight: false },
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 ${
                              feature.highlight ? "bg-white" : "bg-white/20"
                            } rounded-full flex items-center justify-center shadow-lg`}
                          >
                            <span className="text-lg">{feature.icon}</span>
                          </div>
                          <span
                            className={`${
                              feature.highlight
                                ? "text-white font-bold"
                                : "text-white/90 font-normal"
                            } text-lg`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/80 font-normal">
                          العمولة المخفضة
                        </span>
                        <span className="text-white font-bold text-xl">8%</span>
                      </div>
                      <div className="text-white/60 text-sm font-normal">
                        توفير 2% على كل معاملة
                      </div>
                    </div>
                    <Button className="w-full bg-white text-[#0B8A3D] hover:bg-white/90 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group-hover:animate-pulse">
                      <Rocket className="ml-2 h-5 w-5" />
                      اشترك الآن - وفر 50%
                    </Button>
                  </div>
                </div>
              </div>
              {/* Pro Plan */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-gray-800/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl group-hover:border-gray-600 transition-all duration-500 transform group-hover:-translate-y-2">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-white/5 to-transparent p-8 text-center border-b border-white/10">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <span className="text-4xl">💎</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Sadiq Pro
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-5xl font-black text-white">
                        SYP 9.99
                      </span>
                      <div className="text-right">
                        <div className="text-sm text-white/80 font-medium">
                          شهرياً
                        </div>
                        <div className="text-xs text-white/60 font-normal">
                          للخبراء
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm font-normal">
                      للشركات والخبراء
                    </p>
                  </div>
                  {/* Features */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {[
                        { text: "توثيق ذهبي حصري", icon: "🏆" },
                        { text: "لوحة تحكم تحليلية", icon: "📈" },
                        { text: "خصم 15% على كل شيء", icon: "🎁" },
                        { text: "بيع منتجات رقمية", icon: "💼" },
                        { text: "دعم VIP مخصص", icon: "👑" },
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                            <span className="text-sm">{feature.icon}</span>
                          </div>
                          <span className="text-white/90 font-medium">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-4 mb-6 border border-yellow-400/20">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm font-normal">
                          عمولة مخفضة
                        </span>
                        <span className="text-yellow-400 font-bold">6%</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Crown className="ml-2 h-4 w-4" />
                      ترقية للبرو
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0B8A3D]/10 to-transparent rounded-2xl p-8 max-w-4xl mx-auto border border-[#0B8A3D]/20">
                <h3 className="text-2xl font-bold text-black mb-4">
                  غير متأكد من الخطة المناسبة؟
                </h3>
                <p className="text-black/70 mb-6 font-normal">
                  ابدأ مجاناً واترقي في أي وقت بدون التزامات طويلة المدى
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#0B8A3D] hover:bg-[#0B8A3D]/90 text-white px-8 py-3 rounded-xl font-semibold">
                    تحدث مع خبير
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#0B8A3D] text-[#0B8A3D] hover:bg-[#0B8A3D] hover:text-white px-8 py-3 rounded-xl bg-transparent font-semibold"
                  >
                    مقارنة الخطط
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0B8A3D]/20 border border-[#0B8A3D]/30 rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-[#0B8A3D]" />
              <span className="text-[#0B8A3D] font-semibold">
                مميزات استثنائية
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-black">
              لماذا صديق؟
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "أمان متقدم",
                description: "حماية شاملة لجميع المعاملات والبيانات الشخصية",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "مجتمع نشط",
                description: "شبكة من المحترفين والخبراء في جميع المجالات",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "دعم 24/7",
                description: "فريق دعم متخصص متاح على مدار الساعة",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "جودة مضمونة",
                description: "نظام تقييم شفاف يضمن أعلى معايير الجودة",
              },
            ].map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 bg-[#0B8A3D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0B8A3D] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <div className="text-[#0B8A3D] group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-black/70 font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0B8A3D] rounded-xl flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=27&width=40"
                    alt="شعار صديق"
                    width={40}
                    height={27}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">صديق</h3>
                  <p className="text-[#0B8A3D] font-medium">النظام المتكامل</p>
                </div>
              </div>
              <p className="text-white/80 mb-8 leading-relaxed font-normal max-w-md">
                منظومة رقمية متكاملة تجمع بين التعليم والخدمات والتجارة
                الإلكترونية في مكان واحد، لتوفير تجربة شاملة ومتميزة للمستخدمين
                العرب.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, href: "#" },
                  { icon: <Twitter className="h-5 w-5" />, href: "#" },
                  { icon: <Instagram className="h-5 w-5" />, href: "#" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B8A3D] transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {/* hrllo */}
            <div>
              <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4">
                {[
                  {
                    text: "منصة التعليم",
                    href: "https://e-learning-tan-omega.vercel.app/",
                  },
                  { text: "تطبيق الخدمات", href: "https://sadiq.app/" },
                  {
                    text: "المتجر الرقمي",
                    href: "https://sadiq-front-osh1.vercel.app/store",
                  },
                  { text: "الاشتراكات", href: "#plans" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[#0B8A3D] transition-colors font-normal"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#0B8A3D]" />
                  <span className="text-white/80 font-normal">
                    info@sadiq.app
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#0B8A3D]" />
                  <span className="text-white/80 font-normal">
                    +966 50 123 4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#0B8A3D]" />
                  <span className="text-white/80 font-normal">
                    الرياض، المملكة العربية السعودية
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 font-normal">
                <span>© 2024 صديق. جميع الحقوق محفوظة</span>
                <Heart className="h-4 w-4 text-[#0B8A3D] animate-pulse" />
              </div>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors font-normal"
                >
                  سياسة الخصوصية
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors font-normal"
                >
                  شروط الاستخدام
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
