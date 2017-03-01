describe('mgrsConverter', function() {
  var mgrsStr = "33UXP04",
        point;

  beforeEach(angular.mock.module('test'));
  beforeEach(inject(function(_mgrsConverter_) {
		mgrsConverter = _mgrsConverter_;
	}));
  beforeEach(function() {
      point = mgrsConverter.toPoint(mgrsStr);
  });
  
  it('Longitude of point from MGRS correct.', function() {
    expect(point[0]).toBeCloseTo(16.41450, 0.000001);
  });
  it('Latitude of point from MGRS correct.', function() {
    expect(point[1]).toBeCloseTo(48.24949, 0.000001);
  });
  it('MGRS reference with highest accuracy correct.', function() {
    expect(mgrsConverter.geographicToMgrs(point)).toEqual("33UXP0500444998");
  });
  it('MGRS reference with 1-digit accuracy correct.', function() {
    expect(mgrsConverter.geographicToMgrs(point,1)).toEqual(mgrsStr);
  });
});
describe('Second MGRS set', function() {
  let mgrsStr = "24XWT783908", // near UTM zone border, so there are two ways to reference this
      point;
  beforeEach(angular.mock.module('test'));
  beforeEach(inject(function(_mgrsConverter_) {
		mgrsConverter = _mgrsConverter_;
	}));

  beforeEach(function() {
    point = mgrsConverter.toPoint(mgrsStr);
  })

  it('Longitude of point from MGRS correct.', function() {
    expect(point[0]).toBeCloseTo(-32.66433, 0.00001);
  });
  it('Latitude of point from MGRS correct.', function() {
    expect(point[1]).toBeCloseTo(83.62778, 0.00001);
  });
  it('MGRS reference with 1-digit accuracy correct.', function() {
    expect(mgrsConverter.geographicToMgrs(point,3)).toEqual('25XEN041865');
  });
  it('MGRS reference with 5-digit accuracy, northing all zeros', function(){
    expect(mgrsConverter.geographicToMgrs([0,0],5)).toEqual('31NAA6602100000');
  });
  it('MGRS reference with 5-digit accuracy, northing one digit', function(){
    expect(mgrsConverter.geographicToMgrs([0,0.00001],5)).toEqual('31NAA6602100001');
  });
})

describe ('third mgrs set', function () {
  var mgrsStr = '11SPA7234911845',
      point = [-115.0820944, 36.2361322];

  beforeEach(angular.mock.module('test'));
  beforeEach(inject(function(_mgrsConverter_) {
		mgrsConverter = _mgrsConverter_;
	}));

  it('MGRS reference with highest accuracy correct.', function() {
    expect(mgrsConverter.geographicToMgrs(point)).toEqual(mgrsStr);
  });
})
