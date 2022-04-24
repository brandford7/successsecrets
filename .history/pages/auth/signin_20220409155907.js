import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
      <>
          <Box>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <chakra.button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
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
