import { useEffect, useState } from "react";
import { HeaderFrontpage } from "./HeaderFrontpage";
import { usePathname } from "next/navigation";
import { Header } from "./Header";

export function Layout({ navigation, settings, children }) {
  const [navbar, setNavbar] = useState(null)
  const pathname = usePathname();

  useEffect(() => {
    if(pathname === "/") {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  },[pathname])


  return (
    <div className="text-slate-800">
      {navbar ? (
        <HeaderFrontpage navigation={navigation} settings={settings} />
      ) : (
        <Header navigation={navigation} settings={settings} />
      )}
      <main>{children}</main>
    </div>
  );
}
