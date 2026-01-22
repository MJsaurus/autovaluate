import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "DV Reports", href: "/services/diminished-value" },
    { name: "LOU Reports", href: "/services/loss-of-use" },
    { name: "DV + LOU Bundle", href: "/services/bundle" },
    { name: "Pre-Purchase Report", href: "/services/pre-purchase" },
    { name: "Public Adjusting", href: "/services/public-adjusting" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || location !== "/"
          ? "bg-background/80 backdrop-blur-md border-border/40 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer" data-testid="link-home-logo">
            <ShieldCheck className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
            <span className="font-heading font-bold text-xl md:text-2xl tracking-tighter text-white uppercase">
              Auto<span className="text-primary">Signal</span> Group
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide" data-testid="link-home">Home</a>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide outline-none" data-testid="button-services-dropdown">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/95 border-border/40 backdrop-blur-xl">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} className="focus:bg-primary/10">
                  <Link href={link.href}>
                    <a className="w-full text-sm text-foreground hover:text-primary transition-colors py-1" data-testid={`link-service-${link.href.split('/').pop()}`}>{link.name}</a>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/pricing">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide" data-testid="link-pricing">Pricing</a>
          </Link>
          <Link href="/#faq">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide" data-testid="link-faq">FAQ</a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide" data-testid="link-contact">Contact</a>
          </Link>
          
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wide" data-testid="button-consultation-desktop">
            <Link href="/contact">GET A FREE CONSULTATION</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 max-h-[90vh] overflow-y-auto">
          <Link href="/">
            <a className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Home</a>
          </Link>
          <div className="space-y-4">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Services</p>
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="block text-lg font-medium text-foreground hover:text-primary pl-4 border-l border-primary/20" onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
              </Link>
            ))}
          </div>
          <Link href="/pricing">
            <a className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          </Link>
          <Link href="/contact">
            <a className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </Link>
          <Button asChild className="w-full bg-primary text-white font-bold">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>GET A FREE CONSULTATION</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
