const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Anhar | IT Graduate.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
