let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	console.log('Default background color set to %cgreen', `color: ${color}`);
});
let url =  "https://leetcode.com/api/problems/algorithms/";



chrome.runtime.onMessage.addListener((msg,sender,response) => {  
	if(msg.name === "leetcode"){
	
	fetch(url).then(function(res){
		if(res.status !== 200){
			response(console.log("sucess"));
			return;
		}
		res.json().then(function(data){
			response(console.log(data"));
		});
	}).catch(function(err){
	response(console.log(err));
	});
	
	

	}

return true


});

