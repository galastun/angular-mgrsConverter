mgrsConverter
====

Ported from [proj4js/mgrs](https://github.com/proj4js/mgrs) for use as an Angular service.
Utility for converting between WGS84 lat/lng and MGRS coordinates.

has 3 methods

- mgrsToGeographic, takes an array of `[lon,lat]` and optional accuracy and returns an mgrs string
- geographicToMgrs, takes an mgrs string and returns a bbox. 
- toPoint, takes an mgrs string, returns an array of '[lon,lat]'

Licensed under the MIT license except:

Portions of this software are based on a port of components from the OpenMap
com.bbn.openmap.proj.coords Java package. An initial port was initially created
by Patrice G. Cappelaere and included in Community Mapbuilder
(http://svn.codehaus.org/mapbuilder/), which is licensed under the LGPL license
as per http://www.gnu.org/copyleft/lesser.html. OpenMap is licensed under the
[following license agreement](openmap.md):
