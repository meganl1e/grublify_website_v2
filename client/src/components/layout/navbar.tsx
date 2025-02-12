import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/waitlist", label: "Get Started" },
  ];

  return (
    <nav className="border-b py-4 px-6 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold" style={{ color: '#6fceb7' }}>Grublify</a>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href}>
                  <NavigationMenuLink 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary
                      ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
