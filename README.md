# Zelten

A social client that runs on the Tent protocol. https://tent.io/
Visit Zelten: http://zelten.cc

This is open source, and not yet easily installable on any
server.

## Installation

To install Zelten follow the following step by step guide

### Requirements

- PHP 5.3+
- Webserver
- Git
- MySQL (not tested with other databases)

On Ubuntu this is:

    sudo apt-get install php5 php5-curl git msyql-server apache2 php5-mysql

### Obtain the source code

For now the installation is pretty technical using Git:

    git clone https://github.com/beberlei/zelten.git zelten
    cd zelten
    wget https://getcomposer.org/composer.phar
    php composer.phar install --dev

You can skip the "--dev" flag when installing for deployment.

### Configuration

Copy the file ``config/defaults.yml`` to ``config/parameters.yml``
and open the copy.

You have to modify the configuration data to apply to your needs.
Change the ``db_*`` keys to fit your MySQL database.

For development the ``zelten`` key doesn't need any changes.
If you want to deploy Zelten on your server for usage, you should
change the Name, Url and Redirect Url parameters to work with your
installation.

The twitter Configuration is optional.

### Database Setup

After configuration open up a terminal and go to the Zelten root directory,
call:

    php console doctrine:schema:update

This will use the configured database details and setup the database schema
to run Zelten.

### Apache Vhost

Here is a samle Apache Vhost to run Zelten. Make sure to adjust
the ``path/to/zelten/web`` to point to the directory you put
the Zelten source code in.

Put this file into ``/etc/apache2/sites-enabled/zelten``:

    <VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName zelten.local

        DocumentRoot /path/to/zelten/web
        <Directory />
            Options FollowSymLinks
            AllowOverride None
        </Directory>
        <Directory /path/to/zelten/web>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Order allow,deny
            allow from all
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log

        # Possible values include: debug, info, notice, warn, error, crit,
        # alert, emerg.
        LogLevel warn

        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>

Then open up ``/etc/hosts`` and add:

    zelten.local    127.0.0.1

### Development

You can run the tests by calling (requires --dev flag during composer install):

    php bin/vendor/phpunit

Load the application in a debugging mode with:

    http://zelten.local/index_dev.php/

### Building Javascript

The javascript files are managed with require.js. In production we use a compiled version of the javascript files
that are located in ``web/js``. The compiled code is in ``web/build``.

You can build the optiimized compiled javascript with ``r.js``:

    sudo npm install -g requirejs
    r.js -o require_build.js

## Data

All the Mac secrets and OAuth tokens are saved in the database using
Blowish encryption and are safe from database theft.

