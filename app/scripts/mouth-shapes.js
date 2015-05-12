var prestonBlair = 
{
	pic2letterObj:
	[
	{
		letters: ['a','i'],
		id: 'a-i'
	},
	{
		letters: ['e'],
		id: 'e'
	},
	{
		letters: ['o'],
		id: 'o'
	},
	{
		letters: ['u'],
		id: 'u'
	},
	{
		letters: ['c', 'd', 'g', 'h', 'j', 'k', 'n', 'r', 's', 't', 'th', 'x', 'y', 'z'],
		id: 'c-d-g-h-k-n-r-s-th-y-z'
	},
	{
		letters: ['f','v'],
		id: 'f-v'
	},
	{
		letters: ['l'],
		id: 'l'
	},
	{
		letters: ['m','b','p'],
		id: 'm-b-p'
	},
	{
		letters: ['w','q'],
		id: 'w-q'
	},
	{
		letters: [],
		id: 'rest'
	},
	]
};

function makeLetters2ShapeObj(o) {
	out = {};
	o.pic2letterObj.forEach(function(d){
		d.letters.forEach(function(l){
			out[l] = d.id;
			out[l.toUpperCase()] = d.id;
		});
	});
	return out;
}

// var mouthShapes = 
// {
// 	pic2letter:
// 	[
// 		{
// 			letters: ['m','b','p'],
// 			id: 'm-p-b'
// 		},
// 		{
// 			letters: ['a_strong','i_strong'],
// 			id: 'strongA-strongI'
// 		},
// 		{
// 			letters: ['a_soft','o_soft','e_soft'],
// 			id: 'softA-softO-softE'
// 		},
// 		{
// 			letters: ['l','th'],
// 			id: 'l-th'
// 		},
// 		{
// 			letters: ['e_strong','y'],
// 			id: 'strongE-y'
// 		},
// 		{
// 			letters: ['f','v'],
// 			id: 'f-v'
// 		},
// 		{
// 			letters: ['g','h','i_soft','k'],
// 			id: 'g-h-softI-k'
// 		}
// 	]
// };