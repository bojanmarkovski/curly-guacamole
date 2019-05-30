<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'itcrowd' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '[4{mcc=P*Iy]yK./,K%;uxaw.hrDm%*U+,P4+Tmd1|_A63OK gnN()pGvUTFUg85' );
define( 'SECURE_AUTH_KEY',  '_?Y;{o&W]CV,6uUPRiDjx3}R9b-aKu(2h_W3C}d[6}T`2 G+IU5^tP#|!LAvkX{0' );
define( 'LOGGED_IN_KEY',    'zRZC?%7x2r=pH(!OQ,w[>6;Z7&TJrRIdXqAV*e@3ek7Nro!Mf-7Zk`,ysur),lFB' );
define( 'NONCE_KEY',        'LBIr66tBh_?! ;FXWJ|wBfM_-?aEUOKoMTJ*IkzH3Y5V1-a3Kl r9pZFpB64&Vh3' );
define( 'AUTH_SALT',        'E^Zz,3u7.:We]YRZIyon4IO^c-Eph,NFe)6-LvxGW)wG_?*3NnB5/d%U~ZN>y,jT' );
define( 'SECURE_AUTH_SALT', '.9R3,k?=mN0{ B2%d}Jn%v>a)#SMG!X<r*YHLPY8k>_YC0n#Lzh;d8V4-ix=u{Qh' );
define( 'LOGGED_IN_SALT',   '5@}P6b*!_=n6cCpd&CmoGfCSWwBY:C3<!tqfw3cb553pNA;QT!2Os9.O5/@rx-&~' );
define( 'NONCE_SALT',       'k^1]rB8kL/cMn@hEV#BhSAh68UX!IaBHNYd;flJYs*NH;F8/Q)VrkH[wf*2?sG:5' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

define( 'ALLOW_UNFILTERED_UPLOADS', true);