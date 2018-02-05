# Microservices with Angular

## Approach: Bootstrap several SPAs

Contains a shell app and three routed apps created with Angular 2, 4 and 5. They are created with the CLI and ejected. The build task is modified so that it creates just one self contained main-bundle. This bundles don't contain zone.js b/c the shell app loads it. Therefore, it is using the newest version of it. Please note that you need zone.js just once. 
