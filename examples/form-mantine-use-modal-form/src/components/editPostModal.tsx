import type { BaseRecord, HttpError } from "@refinedev/core";
import {
  type UseModalFormReturnType,
  useSelect,
  SaveButton,
  Select,
} from "@refinedev/mantine";
import { Modal, TextInput, Box, Text } from "@mantine/core";
import MDEditor from "@uiw/react-md-editor";

interface FormValues {
  title: string;
  content: string;
  status: string;
  category: { id: string };
}

export const EditPostModal: React.FC<{
  form: UseModalFormReturnType<BaseRecord, HttpError, FormValues>;
}> = ({
  form: {
    getInputProps,
    errors,
    modal: { visible, close, title },
    refineCore: { query },
    saveButtonProps,
  },
}) => {
  const { selectProps } = useSelect({
    resource: "categories",
    defaultValue: query?.data?.data.category.id,
  });

  return (
    <Modal opened={visible} onClose={close} title={title}>
      <TextInput
        mt={8}
        id="title"
        label="Title"
        placeholder="Title"
        {...getInputProps("title")}
      />
      <Select
        mt={8}
        id="status"
        label="Status"
        placeholder="Pick one"
        {...getInputProps("status")}
        data={[
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
          { label: "Rejected", value: "rejected" },
        ]}
      />
      <Select
        mt={8}
        id="categoryId"
        label="Category"
        placeholder="Pick one"
        {...getInputProps("category.id")}
        {...selectProps}
      />
      <Text mt={8} fw={500} size="sm" c="#212529">
        Content
      </Text>
      <MDEditor
        id="content"
        data-color-mode="light"
        {...getInputProps("content")}
      />
      {errors.content && (
        <Text mt={2} fw={500} size="xs" c="red">
          {errors.content}
        </Text>
      )}
      <Box mt={8} style={{ display: "flex", justifyContent: "flex-end" }}>
        <SaveButton {...saveButtonProps} />
      </Box>
    </Modal>
  );
};
