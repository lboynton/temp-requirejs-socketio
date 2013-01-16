requirejs.config(
{
	baseUrl: '.',
	paths:
	{
		requirejs: 'vendor/requirejs',
		socketio: 'vendor/socketio'
	},
	shim:
	{
		socketio:
        {
            exports: 'io'
        }
	}
});

require(['socketio/socket.io'], function(io)
{
	console.log('Socket io: ', io);
});