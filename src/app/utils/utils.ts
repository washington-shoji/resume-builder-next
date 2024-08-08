export function splitIconPath(
	pathString: string | undefined,
	index: number
): string {
	if (pathString) {
		const paths = pathString.split('|');
		return paths[index];
	}
	return '';
}

export function splitStringByPipe(pathString: string | undefined): string[] {
	let strings: string[] = [];
	if (pathString) {
		strings = pathString.split(/\r?\n/);
	}

	return strings;
}
