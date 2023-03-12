from http.server import HTTPServer, SimpleHTTPRequestHandler, test

class LocalRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        LocalRequestHandler.extensions_map[".js"] = "text/javascript"
    
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()
    
if __name__ == "__main__":
    test(LocalRequestHandler, HTTPServer, bind="127.0.0.1")
