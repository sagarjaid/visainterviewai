import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-HJN7SJ6V09`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HJN7SJ6V09');
      `}
      </Script>
      <Component {...pageProps} />
      <Script
        strategy="afterInteractive"
        onLoad={() => {
          console.log("hjar");
        }}
        dangerouslySetInnerHTML={{
          __html: ` (function(h,o,t,j,a,r){
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
      h._hjSettings={hjid:5027212,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
    </>
  );
}
