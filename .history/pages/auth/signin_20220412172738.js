import { Box, chakra } from "@chakra-ui/react";
import { getProviders, signIn } from "next-auth/react";


export default function SignIn({ providers }) {
  //const { data: session, status } = useSession();
  
  
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" h="65vh" bg='brand.900'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <chakra.button
              bg="green"
              p="5"
              borderRadius="10px"
              _hover={{ boxShadow: "md",p:'6', color:'white' }}
              onClick={() => signIn(provider.id, { callbackUrl: '/admin' }) 
               }
            >
              Sign in with {provider.name}
            </chakra.button>
          </div>
        ))}
      </Box>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}


export default function MyApp({ Component, pageProps }) {
      // Use the specified page layout or fallback to the default one.
      const getLayout = Component.getLayout ?? defaultPageLayout

      return getLayout(<Component {...pageProps} />)
    }