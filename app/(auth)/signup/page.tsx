import { SignupForm } from "@/components/auth/signup";

export default function SignUpPage() {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='milade-container flex justify-center py-10 md:py-16'>
        <SignupForm />
      </div>
    </section>
  );
}
