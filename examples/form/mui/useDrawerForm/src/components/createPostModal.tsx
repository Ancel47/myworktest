import {
    Autocomplete,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    SaveButton,
    TextField,
    useAutocomplete,
} from "@pankod/refine-mui";
import {
    Controller,
    UseModalFormReturnType,
} from "@pankod/refine-react-hook-form";

import { ICategory } from "interfaces";

export const CreatePostModal: React.FC<UseModalFormReturnType> = ({
    saveButtonProps,
    modal: { visible, close, title },
    register,
    control,
    formState: { errors },
}) => {
    const { autocompleteProps } = useAutocomplete<ICategory>({
        resource: "categories",
    });

    return (
        <Dialog
            open={visible}
            onClose={close}
            PaperProps={{ sx: { minWidth: 500 } }}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    autoComplete="off"
                    sx={{ display: "flex", flexDirection: "column" }}
                >
                    <TextField
                        {...register("title", {
                            required: "This field is required",
                        })}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        margin="normal"
                        fullWidth
                        label="Title"
                        name="title"
                    />
                    <TextField
                        {...register("status", {
                            required: "This field is required",
                        })}
                        select
                        label="Status"
                        margin="normal"
                        error={!!errors.status}
                        helperText={errors.status?.message}
                        defaultValue="draft"
                    >
                        <MenuItem value="published">Published</MenuItem>
                        <MenuItem value="draft">Draft</MenuItem>
                        <MenuItem value="rejected">Rejected</MenuItem>
                    </TextField>
                    <Controller
                        control={control}
                        name="category"
                        rules={{ required: "This field is required" }}
                        defaultValue=""
                        render={({ field }) => (
                            <Autocomplete
                                {...autocompleteProps}
                                {...field}
                                onChange={(_, value) => {
                                    field.onChange(value);
                                }}
                                getOptionLabel={(item) => {
                                    return (
                                        autocompleteProps?.options?.find(
                                            (p) =>
                                                p?.id?.toString() ===
                                                item?.id?.toString(),
                                        )?.title ?? ""
                                    );
                                }}
                                isOptionEqualToValue={(option, value) =>
                                    value === undefined ||
                                    option.id.toString() === value.toString()
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Category"
                                        margin="normal"
                                        variant="outlined"
                                        error={!!errors.category}
                                        helperText={errors.category?.message}
                                    />
                                )}
                            />
                        )}
                    />
                    <TextField
                        {...register("content", {
                            required: "This field is required",
                        })}
                        error={!!errors.content}
                        helperText={errors.content?.message}
                        margin="normal"
                        label="Content"
                        multiline
                        rows={4}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <SaveButton {...saveButtonProps} />
            </DialogActions>
        </Dialog>
    );
};
