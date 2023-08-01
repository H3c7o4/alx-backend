#!/usr/bin/env python3
"""
Basic Babel Setup
"""
from flask import Flask, g, render_template, request
from flask_babel import Babel, _
from typing import Union

users = {
        1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
        2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
        3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
        4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config(object):
    """ Configuration Babel """
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__, template_folder='templates')
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale():
    """Locale language

    Return:
        Best match to the language
    """
    locale = request.args.get('locale', None)

    if locale and locale in app.config['LANGUAGES']:
        return locale

    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/', strict_slashes=False)
def hello_world():
    """Greetings

    Return:
        Initial template html
    """
    return render_template('5-index.html')


def get_user():
    """Retrieves a User by its ID

    Returns:
        A dictionnary or NULL
    """
    try:
        return users.get(int(requests.args.get("login_as")))
    except Exception:
        return None


@app.before_request
def before_request():
    """Request of each function
    """
    g.user = get_user()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
