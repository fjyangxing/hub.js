# hub.js

Through a simple way to deal with the event flow from customized dispatcher / DOM element / Fetch request / WebSocket / socket io.

## Simple Usage

```js
import $hub from './dist/hub.min.js';

// register an event listener
$hub.listen('test', ( data ) => {
    console.log( 'test', data );
});

setInterval(() => {
    // send the 'test' event
    $hub.emit('test', { code: 1 });
}, 1000);
```

## Example

[→ basic use](https://github.com/yyued/hub.js/blob/master/example/basic_use.html)

[→ store value](https://github.com/yyued/hub.js/blob/master/example/store_value.html)

[→ native event from DOM](https://github.com/yyued/hub.js/blob/master/example/native_event_from_dom.html)

[→ fetch event](https://github.com/yyued/hub.js/blob/master/example/fetch_event.html)

[→ WebSocket event](https://github.com/yyued/hub.js/blob/master/example/websocket_event.html)

[→ socket.io event](https://github.com/yyued/hub.js/blob/master/example/socket_io_event.html)

## License

MIT
