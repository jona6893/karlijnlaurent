import Head from "next/head";
import { Header } from "./Header";

export function Layout({ navigation, settings, children }) {
 
console.log(settings)

  return (
    <div className="text-slate-800">
      <Head>
        <meta name="description" content={settings.data.meta_description} />
      </Head>
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
    </div>
  );
}
