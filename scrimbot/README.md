# discord-ow-scrimbot
A Discord Bot for Scheduling Overwatch Scrims

Some undetailed specs:
```
- commands
    - everyone
        - list scrim (!scrim)
        - accept scrim (!accept)
        - cancel scrim (!cancel)
    - server admin
        - add channel to announcement channels
        - remove channel from announcement channels
        - add channel to input channels
        - remove channel from input channels
        - configure channel region
        - configure channel timezone
    - user
        - configure own timezone
        - configure own region
- list of servers/channels new scrims are announced to
    - target channel timezone configuration mandatory
- list of servers/channels new scrims are listened from
    - per channel timezone configuration mandatory
- scrim enlisting via dm
    - timezeone configuration mandatory
    - region configuration mandatory
- scrim objects to track all messages related to them so they can be removed later
```
