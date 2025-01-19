"use client";

// import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { Session } from "next-auth";
// import NetworkStatus from "@/lib/NetworkStatus";
// import StoreProvider from "@/redux/storeProvider";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
  session: Session | null;
}

export default function Providers({
  children,
  session,
}: ProvidersProps): JSX.Element {
  return (
    <SessionProvider
      session={session}
      refetchInterval={2 * 60} // re-fetch session every 2 minutes
      refetchOnWindowFocus={true}
    >
      {/* <NetworkStatus /> */}
      {/* <StoreProvider> */}
        <QueryClientProvider client={queryClient}>
          {/* <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light"> */}
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            {/* </NextThemesProvider>
          </NextUIProvider> */}
        </QueryClientProvider>
      {/* </StoreProvider> */}
      <Toaster richColors position="top-center" />
    </SessionProvider>
  );
}
