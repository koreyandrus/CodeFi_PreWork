# DatabindingAssignment

## Bind It!

1. Create three new components: GameControl, Odd, Even
2. The GameControl component should have buttons to start and stop the game,
3. When starting the game, an event ( holding a incrementing number ) should get emitted each second ( ref = setInterval() )
4. The event should be listenable from outside the component
5. When stopping the game, no more events shoud get emitted. ( clearInterval(ref) )
6. A new Odd component should get created for every odd numer emitted, the same should happen for the Even component on even numbers.
7. Simply output Odd - Number or Even - Number in the two components
8. Style the element(e.g. paragraph) holding your output text defferently in both components
