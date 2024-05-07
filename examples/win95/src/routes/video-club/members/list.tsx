import { getDefaultFilter, useTable } from "@refinedev/core";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react95";
import {
  Table,
  TableBody,
  TableContainer,
  TableHeadCell,
  TableRow,
  TableDataCell,
  TableHead,
  TableFilterContainer,
  TableFilterInputContainer,
  TableFilterInputLabel,
  TableFilterInputText,
} from "../../../components/table";
import { Pagination } from "../../../components/pagination";
import { DangerIcon } from "../../../components/icons/danger-icon";
import { VideoClubLayoutSubPage } from "../subpage-layout";
import { IExendedMember } from "../../../interfaces";
import { hasActiveRental } from "../../../utils/has-active-rental";

export const VideoClubMemberPageList = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: membersQueryResult,
    pageCount,
    current,
    setCurrent,
    filters,
    setFilters,
  } = useTable<IExendedMember>({
    resource: "members",
    meta: {
      select: "*, rentals(*)",
    },
  });

  const members = membersQueryResult?.data?.data || [];

  return (
    <VideoClubLayoutSubPage
      title="Browse Member"
      help="You can browse all the members in the Refine Video Club."
      onClose={() => navigate("/video-club")}
      isLoading={membersQueryResult?.isLoading}
    >
      <Container>
        <TableContainer>
          <TableFilterContainer>
            <TableFilterInputContainer>
              <TableFilterInputLabel>First Name:</TableFilterInputLabel>
              <TableFilterInputText
                defaultValue={getDefaultFilter(
                  "first_name",
                  filters,
                  "contains",
                )}
                onChange={(e) => {
                  setCurrent(1);
                  setFilters([
                    {
                      field: "first_name",
                      value: e.target.value,
                      operator: "contains",
                    },
                  ]);
                }}
              />
            </TableFilterInputContainer>
            <TableFilterInputContainer>
              <TableFilterInputLabel>Last Name:</TableFilterInputLabel>
              <TableFilterInputText
                defaultValue={getDefaultFilter(
                  "last_name",
                  filters,
                  "contains",
                )}
                onChange={(e) => {
                  setCurrent(1);
                  setFilters([
                    {
                      field: "last_name",
                      value: e.target.value,
                      operator: "contains",
                    },
                  ]);
                }}
              />
            </TableFilterInputContainer>
            <TableFilterInputContainer>
              <TableFilterInputLabel>Member ID:</TableFilterInputLabel>
              <TableFilterInputText
                defaultValue={getDefaultFilter("id", filters, "eq")}
                onChange={(e) => {
                  const value = e.target?.value?.trim();
                  setCurrent(1);
                  setFilters([
                    {
                      field: "id",
                      value: value ? Number(value) : null,
                      operator: "eq",
                    },
                  ]);
                }}
              />
            </TableFilterInputContainer>
            <TableFilterInputContainer>
              <TableFilterInputLabel>Phone Number:</TableFilterInputLabel>
              <TableFilterInputText
                defaultValue={getDefaultFilter("phone", filters, "contains")}
                onChange={(e) => {
                  setCurrent(1);
                  setFilters([
                    {
                      field: "phone",
                      value: e.target.value,
                      operator: "contains",
                    },
                  ]);
                }}
              />
            </TableFilterInputContainer>
          </TableFilterContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell $width={24}>{""}</TableHeadCell>
                <TableHeadCell $width={64}>ID</TableHeadCell>
                <TableHeadCell $width={190}>Firt Name</TableHeadCell>
                <TableHeadCell $width={190}>Last Name</TableHeadCell>
                <TableHeadCell $width={140}>Phone Number</TableHeadCell>
                <TableHeadCell $width={96} $textAlign="right">
                  Earning
                </TableHeadCell>
                <TableHeadCell $width={64}>{""}</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ height: "340px" }}>
              {members.map((member) => {
                return (
                  <TableRow key={member.id}>
                    <TableDataCell $width={24}>
                      {hasActiveRental({
                        member,
                      }) ? (
                        <DangerIcon message="Member has unreturned tape(s)" />
                      ) : null}
                    </TableDataCell>
                    <TableDataCell $width={64}>{member.id}</TableDataCell>
                    <TableDataCell $width={190}>
                      {member.first_name}
                    </TableDataCell>
                    <TableDataCell $width={190}>
                      {member.last_name}
                    </TableDataCell>
                    <TableDataCell $width={140}>{member.phone}</TableDataCell>
                    <TableDataCell $width={96} $textAlign="right">
                      $385,00
                    </TableDataCell>
                    <TableDataCell $width={64} style={{ textAlign: "right" }}>
                      <Link to={`/video-club/members/${member.id}`}>View</Link>
                    </TableDataCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Footer>
            <Pagination
              pageCount={pageCount}
              current={current}
              setCurrent={setCurrent}
            />
            <CancelButton onClick={() => navigate("/video-club")}>
              Cancel
            </CancelButton>
          </Footer>
        </TableContainer>
      </Container>
    </VideoClubLayoutSubPage>
  );
};

const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  gap: 24px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const CancelButton = styled(Button)`
  width: 110px;
`;
