#!/usr/bin/env node

(function() {
	'use strict';

	var marked = require('marked'),
		typeset = require('typeset'),
		commander = require('commander'),
		fs = require('fs');

	//Set options for note compilation
	marked.setOptions({
		gfm: true,
	  	tables: true,
	  	breaks: false,
	  	pedantic: false,
	  	sanitize: true,
	  	smartLists: true,
	  	smartypants: false,
		highlight: function(code) {
			return require('highlightjs').highlightAuto(code).value;
		}
	});

	commander
  		.arguments('<file>')
  		.action(runCompilation)
  		.parse(process.argv);

  	function runCompilation(file) {
  		fs.readFile(file, function(err, data) {
  			if(err) {
  				throw err;
  			}

  			console.log('Read File: ' + file);

  			fs.realpath(file, function(err, realFilePath) {
  				if(err) {
  					throw err;
  				}

  				var newBasePath = '';

  				for(var i = 0; i < realFilePath.split('/').length; i++) {
  					if(realFilePath.split('/')[i]) {
  						if(i !== realFilePath.split('/').length - 1) {
  							newBasePath += '/' + realFilePath.split('/')[i];
  						} else  {
  							newBasePath += '/' + realFilePath.split('/')[i].substr(0, realFilePath.split('/')[i].length - 3) + '.html';
  						}
  					}
  				}

  				var lastUpdated = '';
				var lastUpdatedDate = new Date(fs.statSync(file).mtime);
				lastUpdatedDate = [lastUpdatedDate.getMonth()+1,
               						lastUpdatedDate.getDate(),
               						lastUpdatedDate.getFullYear()].join('/')+' '+
              						[lastUpdatedDate.getHours(),
               						lastUpdatedDate.getMinutes()].join(':');
  				
  				lastUpdated += '<div class="last-updated-date">Last Updated ' + lastUpdatedDate.toString() + '</div>';

  				convertToHtmlFile(typeset(lastUpdated + marked(data.toString('utf-8'))), newBasePath);
  			});
  		});
  	}

  	function convertToHtmlFile(bodyContent, filePath) {
  		var htmlString = '';

  		fs.readFile('base.html', function(err, data) {
  			if(err) {
  				throw err;
  			}

  			htmlString += data.toString('utf-8').split('##TITLE_OF_PAGE')[0] + '<title>' + 
  				filePath.split('/')[filePath.split('/').length - 1].substr(0, filePath.split('/')[filePath.split('/').length - 1].length - 5) + '</title>' + 
  				data.toString('utf-8').split('##TITLE_OF_PAGE')[1] + bodyContent + '</div></body>';

  			console.log('Compiled to HTML; Writing to file...');

  			writeToOutputFile(htmlString, filePath);
  		});
  	}

  	function writeToOutputFile(htmlString, filePath) {
  		fs.writeFile(filePath, htmlString, function(err) {
  			if(err) {
  				throw err;
  			}

  			console.log('compiled to: ' + filePath);
  		});
  	}
})();
