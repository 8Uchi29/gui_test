
def render_html(html_filename, options=None)
    from flask import render_template
    return render_template(html_filename)

if __name__ == '__main__':
    from flask import Flask
    app = Flask(__name__)

    @app.route('/')
    def root_url():
        return render_html('index.html')