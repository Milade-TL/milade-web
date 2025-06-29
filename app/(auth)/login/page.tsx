import { LoginForm } from "@/components/auth/login";

export default function LoginPage() {
  return (
    <main>
      <section className='flex flex-col items-center justify-center min-h-screen bg-gray-100 font-candara'>
        <div className='milade-container flex justify-center'>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
