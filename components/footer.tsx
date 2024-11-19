export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">About Postcodes</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive tool for searching postcodes worldwide. Perfect for
              businesses, travelers, and anyone needing accurate location data.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Search by Postcode</a></li>
              <li><a href="#" className="hover:text-foreground">Search by Country</a></li>
              <li><a href="#" className="hover:text-foreground">Search by Location</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: support@postcodes.com</li>
              <li>Twitter: @Postcodes</li>
              <li>GitHub: github.com/postcodes</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Postcodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}