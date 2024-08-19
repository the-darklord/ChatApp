const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex flex-col items-center mb-4 md:flex-row md:items-start">
			<div className="mb-4 form-control md:mr-8 md:mb-0">
				<label className="gap-2 label">
					<span className="text-lg text-gray-200 md:text-xl label-text">
						Gender
					</span>
				</label>
			</div>
			<div className="form-control md:mr-8">
				<label
					className={`label gap-2 cursor-pointer ${
						selectedGender === "Male" ? "selected" : ""
					} `}
				>
					<span className="text-lg text-gray-200 md:text-xl label-text">
						Male
					</span>
					<input
						type="checkbox"
						className="checkbox checkbox-lg border-slate-900"
						checked={selectedGender === "Male"}
						onChange={() => onCheckboxChange("Male")}
					/>
				</label>
			</div>
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer ${
						selectedGender === "Female" ? "selected" : ""
					}`}
				>
					<span className="text-lg text-gray-200 md:text-xl label-text">
						Female
					</span>
					<input
						type="checkbox"
						className="checkbox checkbox-lg border-slate-900"
						checked={selectedGender === "Female"}
						onChange={() => onCheckboxChange("Female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
