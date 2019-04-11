export default (() => {
	let flatListItemHeight = [];
	return (height, margin) => {
		this.defaultHeight = height;
		this.defaultMargin = margin;

		const setItemHeight = (index, height) => {
			flatListItemHeight[index] = height;
		};

		const get = index => {
			let height = !isNaN(flatListItemHeight[index])
				? flatListItemHeight[index]
				: this.defaultHeight;

			return height + this.defaultMargin;
		};

		getOffset = untilIndex => {
			let offset = 0;
			for (let i = 0; i < untilIndex; i++) {
				offset += get(i);
			}

			return offset;
		};

		getItemLayout = (data, index) => {
			let offset = getOffset(index);
			let length = get(index);
			const itemLayout = {
				length,
				offset,
				index,
			};

			return itemLayout;
		};

		return { setItemHeight, getItemLayout };
	};
})();
