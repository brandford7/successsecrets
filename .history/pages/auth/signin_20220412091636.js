import { Box, chakra } from "@chakra-ui/react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const router = useRouter()
  
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <chakra.button
              bg="green"
              p="5"
              borderRadius="10px"
              _hover={{ boxShadow: "md",p:'6', color:'white' }}
              onClick={() => signIn(provider.id,callbackUrl:'/') 
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
