import { Box, chakra } from "@chakra-ui/react";
import { getProviders, getSession, signIn } from "next-auth/react";
import Footer from "../../components/Footer";
import MainLogo from "../../components/MainLogo";

export default function SignIn({ providers }) {
  //const { data: session, status } = useSession();

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
          <div key={provider.name}>
            <chakra.button
              bg="green"
              p="5"
              borderRadius="10px"
              _hover={{ boxShadow: "md", p: "6", color: "white" }}
              onClick={() => signIn(provider.id, { callbackUrl: "/admin" })}
            >
              Sign in with {provider.name}
            </chakra.button>
          </div>
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
export async function getServerSideProps(req,res) {
  const providers = await getProviders();
   const session = await getSession({ req });
   if (!session) {
     return {
       redirect: {
         destination: "/",
         permanent: false,
       },
     };
   }
  return {
    props: { providers },
  };
}
