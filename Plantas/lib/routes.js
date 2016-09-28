FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/plantas',{
	name: 'plantas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Plantas'});
	}
});