import http.server
import socketserver
import webbrowser

# Set the port number you want to use
PORT = 8000

# Define the request handler
Handler = http.server.SimpleHTTPRequestHandler

# Start the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving at port", PORT)
    # Open the default web browser to view the served page
    webbrowser.open(f'http://farise.yn:{PORT}')
    # Serve until user interrupts with Ctrl+C
    httpd.serve_forever()