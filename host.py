from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

# Configuration
# Note: Changed to 'localhost' to avoid the getaddrinfo error you saw earlier
HOST = 'localhost' 
PORT = 5201

# Automatically detect the directory of the script
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(SimpleHTTPRequestHandler):
	def __init__(self, *args, **kwargs):
		super().__init__(*args, directory=DIRECTORY, **kwargs)

	def do_GET(self):
		# If the user accesses the root '/', serve 'entry-test.html'
		if self.path == '/':
			self.path = '/index.html'
		return super().do_GET()

# Start the server
with HTTPServer((HOST, PORT), CustomHandler) as server:
	print(f"Serving HTTP on {HOST}:{PORT} from {DIRECTORY}")
	# print(f"Main entry point: entry-test.html")
	try:
		server.serve_forever()
	except KeyboardInterrupt:
		print("\nServer stopped.")