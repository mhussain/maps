import string,cgi,time
from os import curdir, sep
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
#import pri

class MyHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            if self.path.endswith(".html"):
                f = open(curdir + sep + self.path)

                self.send_response(200)
                self.send_header('Content-type',	'text/plain')
                self.end_headers()
                self.wfile.write(f.read())
                f.close()
                return
            elif self.path.endswith(".png"):   #our dynamic content
                f = open(curdir + sep + self.path) #self.path has /test.html
                self.send_response(200)
                self.send_header('Content-type',	'image/png')
                self.end_headers()
                self.wfile.write(f.read())
                f.close()
                return
            elif self.path == '/':
                f = open(curdir + sep + 'index.html')
                self.send_response(200)
                self.send_header('Content-type',	'text/html')
                self.end_headers()
                self.wfile.write(f.read())
                f.close()
                return
            if self.path.endswith(".js"):
                f = open(curdir + sep + self.path)

                self.send_response(200)
                self.send_header('Content-type',	'text/js')
                self.end_headers()
                self.wfile.write(f.read())
                f.close()
                return
            return

        except IOError:
            self.send_error(404,'File Not Found: %s' % self.path)


    def do_POST(self):
        global rootnode
        try:
            ctype, pdict = cgi.parse_header(self.headers.getheader('content-type'))
            if ctype == 'multipart/form-data':
                query=cgi.parse_multipart(self.rfile, pdict)
            self.send_response(301)

            self.end_headers()
            upfilecontent = query.get('upfile')
            print "filecontent", upfilecontent[0]
            self.wfile.write("<HTML>POST OK.<BR><BR>");
            self.wfile.write(upfilecontent[0]);

        except :
            pass

def main():
    try:
        server = HTTPServer(('', 8900), MyHandler)
        print "Starting Border Control\n"
        server.serve_forever()
    except KeyboardInterrupt:
        print '^C received, shutting down server'
        server.socket.close()

if __name__ == '__main__':
    main()

