interface IDataProvider<Resource> {
	createData: (resource: Resource) => Promise<void>;
	// readAllData: () => Promise<Resource>;
	readData: (args: { id: string; matchField: string }) => Promise<Resource>;
	updateData: (args: { id: string; resource: Resource }) => Promise<void>;
	deleteData: (id: string) => Promise<void>;
}

export default IDataProvider;
