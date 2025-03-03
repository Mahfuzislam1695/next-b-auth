

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="bg-textPrimary text-primary content-center">
            <header>Navbar</header>
            <div>{children}</div>
            <footer>footer</footer>
        </section>
    );
}