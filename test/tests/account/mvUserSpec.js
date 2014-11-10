/**
 * Created by tdoson on 06.11.14.
 */
describe('mvUser', function(){
    beforeEach(module('app'));

    describe('isAdmin', function(){
        it('not admin', inject(function(mvUser){
            var user = new mvUser();
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;
        }));
        it('admin', inject(function(mvUser){
            var user = new mvUser();
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;
        }))
    })
})