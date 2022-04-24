import { Box,chakra } from "@chakra-ui/react";
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      <Box h='100vh' display='flex' alignItems='center' justifyContent='center'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <chakra.button p='5' bg='green'  onClick={() => signIn(provider.id)}>
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
