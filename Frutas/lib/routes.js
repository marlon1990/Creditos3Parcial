FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/frutas',{
	name: 'frutas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Frutas'});
	}
});