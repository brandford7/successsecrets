import { Box, chakra } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import MainLogo from "../../components/MainLogo";

export default function SignIn({ providers }) {
  

  return (
    <>
      <MainLogo/>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      
      >
        {Object.values(providers).map((provider) => (
          <Box key={provider.name} bg='white' p='20' shadow='lg'>
            <chakra.button
              bg="green"
              p="5"
              borderRadius="10px"
              _hover={{ boxShadow: "md", p: "6", color: "white" }}
              onClick={() => signIn(provider.id, { callbackUrl: "/admin" })}
            >
              Sign in with {provider.name}
            </chakra.button>
          </Box>
        ))}
      </Box>
    </>
  );
}

SignIn.getLayout = function getLayout(page) {
  return (
    <>
      
      {page}
    </>
  );
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps (context) {
  const providers = await getProviders();
  
  return {
    props: { providers },
  };
}
