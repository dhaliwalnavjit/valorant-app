import StyledComponentsRegistry from "@/helpers/registry";
import "./global.css";
import Hero from "@/components/Hero/Hero";

export const metadata = {
  title: "Valorant Database",
  description: "Explore valorant agents, bundles, maps, ranks and much more...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Hero />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
