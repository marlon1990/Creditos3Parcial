FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/figuras',{
	name: 'figuras',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Figuras'});
	}
});