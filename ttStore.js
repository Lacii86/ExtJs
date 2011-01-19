		var transactionTypes = [
			['Minden tranzakció'], 
			['Átutalások'], 
			['Betét műveletek'], 
			['Kártya műveletek'], 
			['Hitel műveletek'], 
			['Díjak és jutalékok'], 
			['Egyéb']
		];
		
		var ttStore = new Ext.data.ArrayStore({
			proxy: new Ext.data.MemoryProxy(transactionTypes),
			fields: [
				{name: 'name'}				
			]
		});	

		ttStore.load();
		
		var accounts = [
			['Kedvenc', '01234567-00000000-98765432', 150000], 
			['Masik', '55523654-00000000-98745478', 75000]
		];		
		
		var accountStore = new Ext.data.ArrayStore({
			proxy: new Ext.data.MemoryProxy(accounts),
			fields:[
				{name: 'name'},
				{name: 'id'},
				{name: 'amount'}
			]
		});
		
		accountStore.load();
		
		var hystoryDataStore = new Ext.data.Store({
			url: 'szamlatortenet.xml',
			reader: new Ext.data.XmlReader({
				record : 'ROW',
				//id: 'NUM',
				totalRecords: '@total'
			},[			
				'ROW',
				{
					name: 'VALUE_DATE',
					//type: 'date'
				},
				'TRANS_DESC',
				'CUST_NAME',
				{
					name: 'AMOUNT',
					type: 'int'
				},
				'TRX_ID',
				'CUST_ACC',
				'TRX_DESCR1',
				'TRX_DESCR2',
				'TRX_DESCR3',
				'TRX_DESCR4'
			])
		});
		
		hystoryDataStore.load();