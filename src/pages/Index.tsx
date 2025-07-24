import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, Download, FileText } from "lucide-react";

const Index = () => {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-telecom-light">
      {/* Header com Logo */}
      <header className="text-center pt-12 pb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <Wifi 
              size={80} 
              className="text-primary animate-pulse-wifi" 
            />
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Garcia Telecomunicações
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Conectando você ao futuro com tecnologia de ponta e serviços de qualidade
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-telecom bg-card/95 backdrop-blur-sm border border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Contratos Disponíveis
              </h2>
              <p className="text-muted-foreground">
                Baixe os contratos de serviços da Garcia Telecomunicações
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contrato Residencial */}
              <div className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-telecom rounded-full shadow-lg">
                  <FileText className="text-primary-foreground" size={32} />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Contrato Garcia Telecomunicações
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contrato padrão para serviços de internet residencial, incluindo instalação, 
                    manutenção e suporte técnico especializado.
                  </p>
                  
                  <Button 
                    onClick={() => handleDownload('TDPJ.pdf')}
                    className="w-full bg-gradient-telecom hover:shadow-telecom hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Download className="mr-2" size={20} />
                    Baixar Contrato Garcia Telecomunicações
                  </Button>
                </div>
              </div>

              {/* Contrato Empresarial */}
              <div className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-telecom rounded-full shadow-lg">
                  <FileText className="text-primary-foreground" size={32} />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Contrato Nets Fibra
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contrato especializado para empresas, com soluções corporativas, 
                    SLA diferenciado e suporte técnico prioritário.
                  </p>
                  
                  <Button 
                    onClick={() => handleDownload('CONTRATO_SERVIÇOS_DIGITAIS.pdf')}
                    variant="outline"
                    className="w-full border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-telecom hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Download className="mr-2" size={20} />
                    Baixar Contrato Nets Fibra
                  </Button>
                </div>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="mt-12 text-center border-t border-border pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Precisa de Ajuda?
              </h4>
              <p className="text-muted-foreground mb-4">
                Entre em contato conosco para esclarecimentos sobre os contratos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-primary font-semibold">
                  📞 (11) 9999-9999
                </span>
                <span className="text-primary font-semibold">
                  📧 contato@garciatelecom.com.br
                </span>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-primary/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Wifi size={24} className="text-primary mr-2" />
            <span className="text-foreground font-semibold">Garcia Telecomunicações</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Garcia Telecomunicações. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;